import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function PerfArchSelectionPage() {
  return (
    <article className="doc-content">
      <h1>성능 효율성 — 아키텍처 선택</h1>

      <p>
        특정 워크로드에 최적의 솔루션을 결정하기 위해 데이터 기반 접근 방식을 사용하세요.
        아키텍처는 여러 솔루션을 조합하여 다양한 기능이 성능을 향상시킬 수 있도록 구성할 수 있습니다.
      </p>

      <h2>4가지 주요 리소스 유형</h2>

      <h3>컴퓨팅</h3>
      <p>AWS에서 컴퓨팅은 세 가지 유형으로 구분됩니다:</p>
      <ul>
        <li><strong>인스턴스:</strong> SSD, GPU 등을 포함한 다양한 패밀리와 크기의 가상화 서버</li>
        <li><strong>컨테이너:</strong> AWS Fargate(서버리스) 또는 ECS/EKS를 통한 OS 레벨 가상화</li>
        <li><strong>함수(Functions):</strong> AWS Lambda로 대표되는 코드 실행 추상화 (인스턴스 없이 코드 실행)</li>
      </ul>
      <p>수요 변화에 따라 일관된 성능을 유지하는 데 도움이 되는 컴퓨팅 유형의 조합을 선택하는 것이 목표입니다.</p>

      <h3>스토리지</h3>
      <ul>
        <li><strong>객체 스토리지:</strong> Amazon S3 — 업계 최고 수준의 확장성, 가용성, 보안, 성능 제공</li>
        <li><strong>블록 스토리지:</strong> Amazon EBS — EC2 인스턴스를 위한 고가용성, 일관된 저지연 블록 스토리지</li>
        <li><strong>파일 스토리지:</strong> Amazon EFS, FSx — 여러 시스템 간 공유 파일 시스템 접근 지원</li>
      </ul>

      <h3>데이터베이스</h3>
      <p>목적별로 구축된 데이터베이스 서비스가 특정 워크로드 요구사항을 해결합니다:</p>
      <ul>
        <li>관계형, 키-값, 문서, 인메모리, 그래프, 시계열, 원장(Ledger) 데이터베이스</li>
        <li>AWS가 프로비저닝, 패치, 백업, 복구를 자동 관리</li>
      </ul>

      <h3>네트워크</h3>
      <ul>
        <li>향상된 네트워킹(Enhanced Networking), EBS 최적화 인스턴스</li>
        <li>S3 Transfer Acceleration, CloudFront 배포 등을 활용하여 성능 최적화</li>
      </ul>

      <h2>데이터 기반 접근</h2>
      <p>
        벤치마킹 또는 부하 테스트를 통해 얻은 데이터를 기반으로 아키텍처를 최적화하세요.
        AWS 솔루션스 아키텍트, AWS 참조 아키텍처, APN 파트너가 업계 지식 기반으로
        아키텍처 선택을 지원합니다.
      </p>

      <PageNav />
    </article>
  );
}
