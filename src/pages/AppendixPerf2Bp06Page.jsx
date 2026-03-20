import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp06Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP06 — 최적화된 하드웨어 기반 컴퓨팅 가속기 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>GPU, FPGA, 커스텀 칩 등 하드웨어 기반 컴퓨팅 가속기를 활용하여 특정 워크로드의 성능을 향상시킵니다. 머신러닝, 고성능 컴퓨팅, 비디오 처리 등 계산 집약적 작업에 특히 효과적입니다.</p>
      <h2>원하는 결과</h2>
      <p>하드웨어 가속기를 활용하여 계산 집약적 워크로드의 성능을 획기적으로 향상시키고, 동시에 비용 효율성을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>가속기 활용이 가능한 워크로드에 범용 CPU만 사용</li>
        <li>하드웨어 가속기의 특성을 파악하지 않고 선택</li>
        <li>가속기 활용에 최적화되지 않은 소프트웨어 스택 사용</li>
        <li>가속기 비용 대비 성능 향상 효과를 분석하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>계산 집약적 작업의 처리 속도 대폭 향상</li>
        <li>동일 성능 대비 비용 절감</li>
        <li>에너지 효율성 향상</li>
        <li>새로운 성능 수준의 서비스 제공 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>머신러닝 워크로드에 AWS Trainium, AWS Inferentia 인스턴스 활용</li>
        <li>고성능 컴퓨팅에 GPU 인스턴스(P4, G5 등) 활용</li>
        <li>FPGA 기반 커스텀 가속이 필요한 경우 F1 인스턴스 검토</li>
        <li>AWS Graviton 프로세서로 가격 대비 성능 최적화</li>
        <li>가속기 활용률을 모니터링하여 적정 인스턴스 유형 선택</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 GPU 인스턴스 — GPU 기반 컴퓨팅 가속</li>
        <li>AWS Trainium — 머신러닝 훈련 가속화</li>
        <li>AWS Inferentia — 머신러닝 추론 가속화</li>
        <li>Amazon EC2 Graviton 인스턴스 — ARM 기반 고효율 컴퓨팅</li>
      </ul>
      <PageNav />
    </article>
  );
}
