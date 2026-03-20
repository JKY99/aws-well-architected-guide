import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP04 — 하드웨어 기반 컴퓨팅 가속기 사용 최적화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        가속 컴퓨팅 인스턴스 사용을 최적화하여 워크로드의 물리적 인프라 요구사항을 줄입니다.
        GPU 및 FPGA와 같은 하드웨어 기반 컴퓨팅 가속기는 특정 기능(그래픽 처리, 데이터 패턴 매칭 등)을
        CPU 기반 대안보다 더 효율적으로 수행합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드의 물리적 인프라 요구사항을 줄이고 적절한 가속기 활용을 통한 리소스 효율성을 개선합니다.
        와트당 성능을 향상시키고 최적화된 하드웨어 선택을 통한 운영 비용을 낮춥니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>GPU 사용량을 모니터링하지 않는 경우</li>
        <li>더 높은 성능, 낮은 비용, 와트당 더 좋은 성능을 제공하는 전용 인스턴스가 있는데도 범용 인스턴스를 사용하는 경우</li>
        <li>CPU 기반 대안이 더 효율적인 작업에 하드웨어 기반 컴퓨팅 가속기를 사용하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>물리적 인프라 요구사항 감소</li>
        <li>효율적인 리소스 활용을 통한 지속 가능성 향상</li>
        <li>더 나은 비용 대비 성능 비율 달성</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>요구사항을 해결하는 가속 컴퓨팅 인스턴스를 파악합니다.</li>
        <li>학습 워크로드에는 AWS Trainium, 추론 워크로드에는 AWS Inferentia(비슷한 EC2 인스턴스 대비 와트당 최대 50% 향상), 딥러닝에는 Amazon EC2 DL1을 사용합니다.</li>
        <li>CloudWatch 에이전트를 사용하여 GPU 활용률(utilization_gpu, utilization_memory) 지표를 수집합니다.</li>
        <li>코드, 네트워크 작업, 가속기 설정을 최적화하여 하드웨어를 완전히 활용합니다.</li>
        <li>고성능 라이브러리와 GPU 드라이버를 최신 상태로 유지합니다.</li>
        <li>사용하지 않을 때 GPU 인스턴스를 자동으로 해제합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Trainium — ML 학습 전용 가속기</li>
        <li>AWS Inferentia — ML 추론 전용 가속기(와트당 최대 50% 향상)</li>
        <li>Amazon EC2 DL1 — 딥러닝 전용 인스턴스</li>
        <li>Amazon EC2 가속 컴퓨팅 인스턴스 — GPU, FPGA 등 다양한 가속기</li>
        <li>Amazon CloudWatch — GPU 활용률 지표 수집 및 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
