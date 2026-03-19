import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP05 — 공유 스토리지 액세스 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        데이터를 여러 인스턴스에 복제하는 대신 공유 스토리지를 활용하여 중복 저장을 최소화합니다.
        공유 파일 시스템이나 객체 스토리지를 사용하면 동일한 데이터를 여러 곳에 복사하지 않아도 되므로
        스토리지 용량과 이를 지원하는 하드웨어 에너지 소비를 줄일 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        여러 인스턴스나 서비스가 단일 공유 스토리지를 통해 데이터에 접근함으로써
        불필요한 데이터 복제를 제거하고 스토리지 풋프린트와 관련 에너지 소비를 최소화합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>동일 데이터를 여러 EC2 인스턴스의 로컬 스토리지에 복제하여 저장하는 것</li>
        <li>공유 스토리지 없이 각 인스턴스가 독립적인 데이터 사본을 유지하는 것</li>
        <li>데이터 공유를 위해 인스턴스 간 지속적인 데이터 전송을 수행하는 것</li>
        <li>스토리지 절약보다 단순성을 위해 중복 데이터를 허용하는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 중복 제거로 물리적 스토리지 하드웨어 수요 및 에너지 소비 감소</li>
        <li>단일 진실 소스(Single Source of Truth) 유지로 데이터 일관성 향상</li>
        <li>데이터 복제 및 동기화에 필요한 네트워크 트래픽 감소</li>
        <li>스토리지 비용 절감 및 관리 복잡도 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>공유 파일 액세스가 필요한 워크로드에 Amazon EFS(Elastic File System) 도입</li>
        <li>정적 콘텐츠 및 데이터 파일을 Amazon S3에 저장하여 모든 서비스가 공유 접근</li>
        <li>고성능 공유 스토리지가 필요한 경우 Amazon FSx for Lustre 또는 FSx for Windows 활용</li>
        <li>로컬 인스턴스 스토리지 의존도를 줄이고 공유 스토리지 아키텍처로 전환</li>
        <li>데이터 접근 패턴을 분석하여 공유 스토리지가 가장 효과적인 영역 파악 및 우선 적용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EFS — 여러 EC2 인스턴스가 공유하는 완전 관리형 NFS 파일 시스템</li>
        <li>Amazon S3 — 무제한 확장 가능한 공유 객체 스토리지</li>
        <li>Amazon FSx for Lustre — 고성능 컴퓨팅을 위한 공유 파일 시스템</li>
        <li>Amazon FSx for Windows File Server — Windows 환경의 공유 스토리지</li>
        <li>AWS Storage Gateway — 온프레미스와 클라우드 공유 스토리지 연결</li>
      </ul>
      <PageNav />
    </article>
  );
}
