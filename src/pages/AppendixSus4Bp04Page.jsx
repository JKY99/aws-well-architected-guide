import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP04 — 탄력성과 자동화로 블록 스토리지 또는 파일 시스템 확장</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        탄력성과 자동화를 사용하여 데이터 증가에 따라 블록 스토리지 또는 파일 시스템을 확장함으로써
        총 프로비저닝 스토리지를 최소화합니다. 워크로드에 적합한 크기 할당, 처리량, 지연 시간을 가진
        블록 스토리지와 파일 시스템을 생성하고 과잉 프로비저닝을 방지합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        스토리지 시스템의 과잉 프로비저닝을 최소화하고 유휴 리소스를 줄입니다.
        워크로드의 전반적인 효율성을 개선하고 데이터 증가에 따라 스토리지를 자동으로 확장합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>미래 필요를 위해 대용량 블록 스토리지 또는 파일 시스템을 사전 구매하는 경우</li>
        <li>파일 시스템의 IOPS를 과잉 프로비저닝하는 경우</li>
        <li>데이터 볼륨 활용률을 모니터링하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>과잉 프로비저닝 최소화를 통한 유휴 리소스 감소</li>
        <li>워크로드 전반적인 효율성 개선</li>
        <li>실제 필요에 따른 자동 스토리지 확장</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EBS에서 스토리지 사용량과 용량을 추적하고 임계값에서 스토리지를 늘리는 자동화를 구성합니다.</li>
        <li>Amazon EBS Elastic Volumes를 활용하여 볼륨 크기, 유형 또는 성능을 변경합니다.</li>
        <li>실제 필요에 맞는 적절한 스토리지 클래스, 성능 모드, 처리량 모드를 선택합니다.</li>
        <li>목표 활용률 수준을 정의하고 예상 범위를 벗어날 때 리소스를 조정합니다.</li>
        <li>읽기 전용 볼륨은 실제 데이터에 맞게 크기를 조정하고 과잉 프로비저닝된 리소스를 정기적으로 축소합니다.</li>
        <li>데이터를 객체 스토리지로 마이그레이션하여 초과 블록 스토리지 용량을 방지합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EBS — Elastic Volumes 기능을 가진 블록 스토리지</li>
        <li>Amazon EFS — 성능 최적화 기능을 가진 탄력적 파일 시스템</li>
        <li>Amazon FSx — 관리형 파일 시스템 서비스</li>
      </ul>

      <PageNav />
    </article>
  );
}
